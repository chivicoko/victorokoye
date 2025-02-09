import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
        "name": "VictorOkoye.com",
        "short_name": "VictorOkoye.com",
        "description": "VictorOkoye.com is the personal website/portfolio of Victor Okoye, an expert Full-stack Web Developer.",
        "icons":[
            {"src":"/icon-16x16.png","sizes":"16x16","type":"image/png"},
            {"src":"/icon-32x32.png","sizes":"32x32","type":"image/png"},
            {"src":"/icon-192x192.png","sizes":"192x192","type":"image/png"},
            {"src":"/icon-512x512.png","sizes":"512x512","type":"image/png"}
        ],
        "scope": "/",
        "start_url": "/",
        "theme_color":"#0a02fb",
        "background_color":"#ffffff",
        "display":"standalone"
    }
}