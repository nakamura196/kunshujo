'use client'

import {useEffect, useRef, useState} from 'react'
import {useLocale, useTranslations} from 'next-intl'
import 'maplibre-gl/dist/maplibre-gl.css'

type MarkerData = {
  lat: number
  lng: number
  label: string
  id: string
}

type EntityItem = {
  objectID: string
  label?: string
  geo?: string
  [key: string]: unknown
}

export default function MapClient() {
  const t = useTranslations('Common')
  const locale = useLocale()
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<import('maplibre-gl').Map | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let mounted = true

    async function init() {
      const maplibregl = await import('maplibre-gl')

      const res = await fetch('/api/map')
      const data = await res.json() as {objectID: string; label?: string; geo: string; count?: string}[]

      if (!mounted || !mapRef.current) return

      const markers: MarkerData[] = []
      const geoMap: Record<string, MarkerData> = {}

      for (const item of data) {
        if (!item.geo) continue
        const [lat, lng] = item.geo.split(' ').map(Number)
        if (isNaN(lat) || isNaN(lng)) continue

        if (!geoMap[item.geo]) {
          geoMap[item.geo] = {
            lat,
            lng,
            label: item.label || item.objectID,
            id: item.objectID,
          }
        }
      }

      for (const geo in geoMap) {
        markers.push(geoMap[geo])
      }

      const map = new maplibregl.Map({
        container: mapRef.current,
        style: {
          version: 8,
          sources: {
            osm: {
              type: 'raster',
              tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
              tileSize: 256,
              attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            },
          },
          layers: [
            {
              id: 'osm',
              type: 'raster',
              source: 'osm',
            },
          ],
        },
        center: [139.7, 35.7],
        zoom: 2,
      })

      mapInstanceRef.current = map

      map.addControl(new maplibregl.NavigationControl(), 'top-right')

      const bounds = new maplibregl.LngLatBounds()
      let hasBounds = false

      for (const marker of markers) {
        const popup = new maplibregl.Popup({offset: 25}).setHTML(
          `<a href="/${locale}/search?fc-place=${marker.id}" style="color:#1d4ed8;text-decoration:underline">${marker.label}</a>`
        )

        new maplibregl.Marker({color: '#b91c1c'})
          .setLngLat([marker.lng, marker.lat])
          .setPopup(popup)
          .addTo(map)

        bounds.extend([marker.lng, marker.lat])
        hasBounds = true
      }

      if (hasBounds) {
        map.fitBounds(bounds, {padding: 40, maxZoom: 10})
      }

      setIsLoading(false)
    }

    init().catch(() => {
      if (mounted) setIsLoading(false)
    })

    return () => {
      mounted = false
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [locale])

  return (
    <div className="space-y-4">
      {isLoading ? (
        <div className="text-center text-sm text-stone-500">{t('loading')}</div>
      ) : null}
      <div
        ref={mapRef}
        style={{width: '100%', height: 600}}
        className="rounded-2xl overflow-hidden"
      />
    </div>
  )
}
