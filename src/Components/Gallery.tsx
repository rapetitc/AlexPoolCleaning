type GalleryImage = { url: string; description: string };

const IMAGES: GalleryImage[] = [
  { url: "/Cleaning1.webp", description: "Sparkling water" },
  { url: "/Cleaning2.webp", description: "Before" },
  { url: "/Cleaning3.webp", description: "After" },
  { url: "/Cleaning4.webp", description: "Ready to swim" },
  { url: "/Cleaning5.webp", description: "West Palm Beach, FL" },
];

const LAYOUT = [
  "aspect-[4/5] md:row-span-2 md:aspect-auto", // alta
  "aspect-square", // cuadrada
  "aspect-square", // cuadrada
  "aspect-[4/5] md:row-span-2 md:aspect-auto", // alta
  "col-span-2 aspect-[2/1]", // ancha
];

const TILES = ["tile-a", "tile-b", "tile-c"];

function Gallery({ images = IMAGES }: { images?: GalleryImage[] }) {
  const fullBlocks = Math.floor(images.length / LAYOUT.length) * LAYOUT.length;

  return (
    <section id="gallery" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="mb-8 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
          Gallery
        </h2>
        {images.length === 0 ? (
          <p className="rounded-2xl border border-line bg-card px-6 py-12 text-center text-muted">
            Photos coming soon.
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            {images.map((img, i) => {
              const shape =
                i < fullBlocks ? LAYOUT[i % LAYOUT.length] : "aspect-square";
              return (
                <figure
                  key={img.url}
                  className={`group relative overflow-hidden rounded-2xl ${TILES[i % TILES.length]} ${shape}`}
                >
                  <img
                    src={img.url}
                    alt={img.description}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <figcaption className="absolute bottom-3 left-3 rounded-md bg-navy/70 px-3 py-1 text-sm font-bold text-white">
                    {img.description}
                  </figcaption>
                </figure>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export default Gallery;
