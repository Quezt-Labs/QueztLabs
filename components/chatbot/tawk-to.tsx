"use client";

import { useEffect } from "react";

/**
 * Tawk.to Chatbot Integration
 *
 * Free live chat widget with:
 * - Real-time messaging
 * - Mobile app support
 * - Analytics & reports
 * - Customizable widget
 * - Multi-language support
 *
 * Setup Instructions:
 * 1. Sign up at https://www.tawk.to (free)
 * 2. Create a property for your website
 * 3. Get your Property ID from dashboard
 * 4. Add NEXT_PUBLIC_TAWK_TO_PROPERTY_ID to .env file
 * 5. Optional: Add NEXT_PUBLIC_TAWK_TO_WIDGET_ID for specific widget
 *
 * Example .env:
 * NEXT_PUBLIC_TAWK_TO_PROPERTY_ID=your-property-id-here
 * NEXT_PUBLIC_TAWK_TO_WIDGET_ID=your-widget-id-here (optional)
 */

interface TawkToProps {
  propertyId?: string;
  widgetId?: string;
}

export function TawkTo({ propertyId, widgetId }: TawkToProps) {
  useEffect(() => {
    // Get property ID from env or prop
    const tawkPropertyId =
      propertyId || process.env.NEXT_PUBLIC_TAWK_TO_PROPERTY_ID;
    const tawkWidgetId = widgetId || process.env.NEXT_PUBLIC_TAWK_TO_WIDGET_ID;

    if (!tawkPropertyId) {
      console.warn(
        "Tawk.to Property ID not found. Please add NEXT_PUBLIC_TAWK_TO_PROPERTY_ID to your .env file"
      );
      return;
    }

    // Prevent duplicate script loading
    if (window.Tawk_API) {
      return;
    }

    // Create script element
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://embed.tawk.to/${tawkPropertyId}${tawkWidgetId ? `/${tawkWidgetId}` : ""}`;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    // Insert script
    const firstScript = document.getElementsByTagName("script")[0];
    if (firstScript?.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    } else {
      document.head.appendChild(script);
    }

    // Initialize Tawk.to API
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    // Optional: Customize widget appearance
    window.Tawk_API.customStyle = {
      visibility: {
        desktop: {
          position: "br", // bottom-right
          xOffset: 20,
          yOffset: 20,
        },
        mobile: {
          position: "br",
          xOffset: 10,
          yOffset: 10,
        },
      },
      zIndex: 1000,
    };

    // Optional: Hide widget on specific pages
    // window.Tawk_API.onLoad = function() {
    //   if (window.location.pathname === '/admin') {
    //     Tawk_API.hideWidget();
    //   }
    // };

    // Cleanup function
    return () => {
      // Tawk.to doesn't provide a cleanup method, but we can hide it
      if (window.Tawk_API && window.Tawk_API.hideWidget) {
        window.Tawk_API.hideWidget();
      }
    };
  }, [propertyId, widgetId]);

  return null; // This component doesn't render anything
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    Tawk_API?: {
      hideWidget?: () => void;
      showWidget?: () => void;
      maximize?: () => void;
      minimize?: () => void;
      toggle?: () => void;
      onLoad?: () => void;
      onChatStarted?: () => void;
      onChatEnded?: () => void;
      customStyle?: {
        visibility?: {
          desktop?: {
            position?: string;
            xOffset?: number;
            yOffset?: number;
          };
          mobile?: {
            position?: string;
            xOffset?: number;
            yOffset?: number;
          };
        };
        zIndex?: number;
      };
    };
    Tawk_LoadStart?: Date;
  }
}
