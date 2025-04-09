// mouseTracker.js
import { createAnimatable, utils } from "animejs";

export function setupMouseTracker(
  containerSelector = "#docs-demos",
  targetSelector = ".square"
) {
  const $demos = document.querySelector(containerSelector);
  const $demo = $demos.querySelector(".docs-demo.is-active");

  if (!$demos || !$demo) return;

  let bounds = $demo.getBoundingClientRect();
  const refreshBounds = () => (bounds = $demo.getBoundingClientRect());

  const animatableSquare = createAnimatable(targetSelector, {
    x: 500,
    y: 500,
    ease: "out(3)",
  });

  const onMouseMove = (e) => {
    const { width, height, left, top } = bounds;
    const hw = width / 2;
    const hh = height / 2;
    const x = utils.clamp(e.clientX - left - hw, -hw, hw);
    const y = utils.clamp(e.clientY - top - hh, -hh, hh);
    animatableSquare.x(x);
    animatableSquare.y(y);
  };

  window.addEventListener("mousemove", onMouseMove);
  $demos.addEventListener("scroll", refreshBounds);
}
