import React, { useEffect, useRef } from "react";
import { NeatConfig, NeatGradient } from "@firecms/neat";

const GradientComponent = () => {
    const canvasRef = useRef(null);
    const gradientRef = useRef(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const config = {
          "colors": [
              {
                  "color": "#F6F5F2",
                  "enabled": true
              },
              {
                  "color": "#F0EBE3",
                  "enabled": true
              },
              {
                  "color": "#F3D0D7",
                  "enabled": true
              },
              {
                  "color": "#FFEFEF",
                  "enabled": true
              },
              {
                  "color": "#FFFFFF",
                  "enabled": true
              }
          ],
          "speed": 10,
          "horizontalPressure": 2,
          "verticalPressure": 5,
          "waveFrequencyX": 2,
          "waveFrequencyY": 5,
          "waveAmplitude": 4,
          "shadows": 10,
          "highlights": 5,
          "colorBrightness": 0.95,
          "colorSaturation": 4,
          "wireframe": false,
          "colorBlending": 7,
          "backgroundColor": "#0b3954",
          "backgroundAlpha": 1,
          "resolution": 2
      };

        gradientRef.current = new NeatGradient({
            ref: canvasRef.current,
            ...config,
        });

        return () => {
            if (gradientRef.current) {
                gradientRef.current.destroy();
            }
        };
    }, []);

    return (
        <canvas
            style={{ width: "100%", height: "100%", display: "block" }}
            ref={canvasRef}
        />
    );
};

export default GradientComponent;