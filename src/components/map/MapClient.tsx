'use client'

import {useEffect, useRef, useState} from 'react'
import {useLocale, useTranslations} from 'next-intl'

type Marker = {
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
  const [isLoading, setIsLoading] = useState(true)
  const leafletRef = useRef<typeof import('leaflet') | null>(null)
  const mapInstanceRef = useRef<import('leaflet').Map | null>(null)

  useEffect(() => {
    let mounted = true

    async function init() {
      const L = await import('leaflet')
      leafletRef.current = L

      // Load CSS
      if (!document.querySelector('link[href*="leaflet"]')) {
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
        document.head.appendChild(link)
      }

      // Fix default icon
      delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      })

      const res = await fetch('/data/entity.json')
      const data: EntityItem[] = await res.json()

      if (!mounted || !mapRef.current) return

      const markers: Marker[] = []
      const geoMap: Record<string, Marker> = {}
      let cLat = 0
      let cLng = 0
      let count = 0

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
        cLat += lat
        cLng += lng
        count++
      }

      for (const geo in geoMap) {
        markers.push(geoMap[geo])
      }

      const map = L.map(mapRef.current).setView([35.7, 139.7], 3)
      mapInstanceRef.current = map

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(map)

      const leafletMarkers: import('leaflet').Marker[] = []
      for (const marker of markers) {
        const m = L.marker([marker.lat, marker.lng])
          .addTo(map)
          .bindPopup(
            `<a href="/${locale}/search?fc-place=${marker.id}">${marker.label}</a>`
          )
        leafletMarkers.push(m)
      }

      if (leafletMarkers.length > 0) {
        const group = L.featureGroup(leafletMarkers)
        map.fitBounds(group.getBounds(), {padding: [40, 40]})
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
