"use client";

import { useEffect } from "react";

/**
 * Joue un son UNE SEULE FOIS au démarrage du site.
 * Les navigateurs bloquent l'autoplay : on tente immédiatement, sinon on
 * déclenche au tout premier geste de l'utilisateur (clic / touche / tap).
 * Un flag de session évite de rejouer au rechargement.
 */
export default function StartupSound({ src, volume = 0.5 }: { src: string; volume?: number }) {
  useEffect(() => {
    try {
      if (sessionStorage.getItem("sm-startup-sound")) return;
    } catch {
      /* sessionStorage indisponible — on continue */
    }

    const audio = new Audio(src);
    audio.volume = volume;
    let done = false;

    const markDone = () => {
      if (done) return;
      done = true;
      try {
        sessionStorage.setItem("sm-startup-sound", "1");
      } catch {
        /* ignore */
      }
      remove();
    };

    const onGesture = () => {
      if (done) return;
      audio.play().then(markDone).catch(() => {});
    };

    function remove() {
      window.removeEventListener("pointerdown", onGesture);
      window.removeEventListener("keydown", onGesture);
      window.removeEventListener("touchstart", onGesture);
    }

    // 1) tentative d'autoplay immédiat
    audio
      .play()
      .then(markDone)
      .catch(() => {
        // 2) bloqué → on joue au premier geste
        window.addEventListener("pointerdown", onGesture, { once: true });
        window.addEventListener("keydown", onGesture, { once: true });
        window.addEventListener("touchstart", onGesture, { once: true });
      });

    return remove;
  }, [src, volume]);

  return null;
}
