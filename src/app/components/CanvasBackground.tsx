"use client";

import { useEffect, useRef } from "react";

// Define types for points and circles
interface Point {
  x: number;
  y: number;
  originX: number;
  originY: number;
  closest?: Point[];
  circle?: Circle;
  active?: number;
}

interface Circle {
  pos: Point;
  radius: number;
  color: string;
  active: number;
  draw: () => void;
}

interface Props {
  className: string;
}

export default function CanvasBackground({ className }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let width: number,
      height: number,
      canvas: HTMLCanvasElement,
      ctx: CanvasRenderingContext2D | null;
    let points: Point[] = [],
      target: Point = { x: 0, y: 0, originX: 0, originY: 0 },
      animateHeader = true;
    let animationFrameId: number;

    function getDistance(p1: Point, p2: Point) {
      return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    }

    function Circle(this: Circle, pos: Point, rad: number, color: string) {
      this.pos = pos;
      this.radius = rad;
      this.color = color;
      this.active = 0;
      this.draw = function () {
        if (!this.active) return;
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = `rgba(156,217,249,${this.active})`;
        ctx.fill();
      };
    }

    function drawLines(p: Point) {
      if (!p.active || !ctx || !p.closest) return;
      for (const i in p.closest) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.closest[i].x, p.closest[i].y);
        ctx.strokeStyle = `rgba(156,217,249,${p.active})`;
        ctx.stroke();
      }
    }

    function shiftPoint(p: Point) {
      const duration = 1000 + 1000 * Math.random();
      const newX = p.originX - 50 + Math.random() * 100;
      const newY = p.originY - 50 + Math.random() * 100;
      const startX = p.x;
      const startY = p.y;
      const start = performance.now();

      function animatePoint(now: number) {
        const elapsed = now - start;
        const t = Math.min(elapsed / duration, 1);
        p.x = startX + (newX - startX) * t;
        p.y = startY + (newY - startY) * t;
        if (t < 1) {
          requestAnimationFrame(animatePoint);
        } else {
          shiftPoint(p);
        }
      }
      requestAnimationFrame(animatePoint);
    }

    function initHeader() {
      width = window.innerWidth;
      height = window.innerHeight;
      target = {
        x: width / 2,
        y: height / 2,
        originX: width / 2,
        originY: height / 2,
      };

      canvas = canvasRef.current!;
      canvas.width = width;
      canvas.height = height;
      ctx = canvas.getContext("2d");

      // create points
      points = [];
      for (let x = 0; x < width; x = x + width / 20) {
        for (let y = 0; y < height; y = y + height / 20) {
          const px = x + (Math.random() * width) / 20;
          const py = y + (Math.random() * height) / 20;
          const p: Point = { x: px, originX: px, y: py, originY: py };
          points.push(p);
        }
      }

      // for each point find the 5 closest points
      for (let i = 0; i < points.length; i++) {
        const closest: Point[] = [];
        const p1 = points[i];
        for (let j = 0; j < points.length; j++) {
          const p2 = points[j];
          if (!(p1 === p2)) {
            if (closest.length < 5) {
              closest.push(p2);
            } else {
              // Find the farthest in closest
              let maxDist = 0;
              let maxIndex = 0;
              for (let k = 0; k < 5; k++) {
                const dist = getDistance(p1, closest[k]);
                if (dist > maxDist) {
                  maxDist = dist;
                  maxIndex = k;
                }
              }
              if (getDistance(p1, p2) < maxDist) {
                closest[maxIndex] = p2;
              }
            }
          }
        }
        p1.closest = closest;
      }

      // assign a circle to each point
      for (const i in points) {
        const c = Object.create(Circle.prototype);
        Circle.call(
          c,
          points[i],
          2 + Math.random() * 2,
          "rgba(255,255,255,0.3)"
        );
        points[i].circle = c;
      }
    }

    function animate() {
      if (animateHeader && ctx) {
        ctx.clearRect(0, 0, width, height);
        
        // Use smaller effect radius on mobile devices
        const isMobile = isMobileDevice();
        const closeDistance = isMobile ? 8000 : 20000;
        const mediumDistance = isMobile ? 25000 : 80000;
        const farDistance = isMobile ? 50000 : 160000;
        
        for (const i in points) {
          // detect points in range
          if (Math.abs(getDistance(target, points[i])) < closeDistance) {
            points[i].active = 0.3;
            points[i].circle!.active = 0.6;
          } else if (Math.abs(getDistance(target, points[i])) < mediumDistance) {
            points[i].active = 0.1;
            points[i].circle!.active = 0.3;
          } else if (Math.abs(getDistance(target, points[i])) < farDistance) {
            points[i].active = 0.02;
            points[i].circle!.active = 0.2;
          } else {
            points[i].active = 0;
            points[i].circle!.active = 0;
          }

          drawLines(points[i]);
          points[i].circle!.draw();
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    }

    function mouseMove(e: MouseEvent) {
      let posx = 0,
        posy = 0;
      if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
      } else if (e.clientX || e.clientY) {
        posx =
          e.clientX +
          document.body.scrollLeft +
          document.documentElement.scrollLeft;
        posy =
          e.clientY +
          document.body.scrollTop +
          document.documentElement.scrollTop;
      }
      target.x = posx;
      target.y = posy;
    }

    function isMobileDevice() {
      return window.matchMedia("(max-width: 768px)").matches || 
             'ontouchstart' in window || 
             navigator.maxTouchPoints > 0;
    }

    function scrollCheck() {
      if (document.body.scrollTop > height) animateHeader = false;
      else animateHeader = true;
    }

    function resize() {
      initHeader();
    }

    // Initialize
    initHeader();
    for (const i in points) {
      shiftPoint(points[i]);
    }
    animate();

    if (!isMobileDevice()) {
      window.addEventListener("mousemove", mouseMove);
    }
    window.addEventListener("scroll", scrollCheck);
    window.addEventListener("resize", resize);

    // Cleanup
    return () => {
      if (!isMobileDevice()) {
        window.removeEventListener("mousemove", mouseMove);
      }
      window.removeEventListener("scroll", scrollCheck);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`inset-0 w-full h-full ${className}`}
      id="demo-canvas"
    ></canvas>
  );
}
