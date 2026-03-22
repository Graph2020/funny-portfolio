import { motion, useScroll, useSpring, useTransform } from "motion/react";

function ParallaxBg() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const mountain3Y = useTransform(x, [0, 0.5], [0, -50]);
  const planetsY = useTransform(x, [0, 0.5], [0, -100]);
  const mountain2Y = useTransform(x, [0, 0.5], [0, -150]);
  const mountain1Y = useTransform(x, [0, 0.5], [0, -200]);
  const imageStyle = {
    backgroundSize: "cover",
    backgroundPosition: "bottom",
  };

  const getBackgroundStyle = (imageUrl, yTransform) => {
    return {
      ...imageStyle,
      backgroundImage: `url('${imageUrl}')`,
      ...(yTransform && { y: yTransform }),
    };
  };
  return (
    <section className="images-placement bg-black/40">
      <div
        style={getBackgroundStyle("/assets/hero-bg.png")}
        className="relative h-screen overflow-y-hidden"
      >
        {/* bg sky */}
        <motion.div
          style={getBackgroundStyle("/assets/sky.jpg")}
          className="images-placement -z-50 w-full h-screen"
        ></motion.div>
        {/* moutain layer 3 */}
        <motion.div
          style={getBackgroundStyle("/assets/mountain-3.png", mountain3Y)}
          className="images-placement -z-40 w-full h-screen"
        ></motion.div>
        {/* planets */}
        <motion.div
          style={getBackgroundStyle("/assets/planets.png", planetsY)}
          className="images-placement -z-30 w-full h-screen"
        ></motion.div>
        {/* moutain layer 2 */}
        <motion.div
          style={getBackgroundStyle("/assets/mountain-2.png", mountain2Y)}
          className="images-placement -z-20 w-full h-screen"
        ></motion.div>
        {/* moutain layer 1 */}
        <motion.div
          style={getBackgroundStyle("/assets/mountain-1.png", mountain1Y)}
          className="images-placement -z-10 w-full h-screen"
        ></motion.div>
      </div>
    </section>
  );
}

export default ParallaxBg;
