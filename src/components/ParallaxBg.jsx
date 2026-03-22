function ParallaxBg() {
  return (
    <section className="absolute inset-0 bg-black/40">
      <div
        style={{ backgroundImage: "url(/assets/sky.jpg)" }}
        className="relative h-screen overflow-y-hidden"
      >
        {/* bg sky */}
        <div className="absolute -z-50 inset-0 w-full h-screen"></div>
        {/* moutain layer 3 */}
        <div className=""></div>
        {/* planets */}
        <div></div>
        {/* moutain layer 2 */}
        <div></div>
        {/* moutain layer 1 */}
        <div></div>
      </div>
    </section>
  );
}

export default ParallaxBg;
