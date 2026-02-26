import { lazy, Suspense, useMemo, useState } from "react";

const LazyImage = lazy(() => import("./lazyimage"));

function App() {
  const imagePool = useMemo(
    () => [
      "https://picsum.photos/id/1069/900/560",
      "https://picsum.photos/id/1043/900/560",
      "https://picsum.photos/id/1015/900/560",
      "https://picsum.photos/id/1025/900/560",
      "https://picsum.photos/id/1039/900/560",
    ],
    []
  );

  const [imageIndex, setImageIndex] = useState(0);

  const handleChangeImage = () => {
    setImageIndex((currentIndex) => (currentIndex + 1) % imagePool.length);
  };

  return (
    <main className="app-shell">
      <section className="hero-card">
        <h1 className="app-title">Exp-5: Welcome to My App</h1>
        <p className="profile-tag">Tejo Gudala - 23BAI70185</p>
        <p className="app-subtitle">
          Text is rendered immediately. The image below is lazy loaded.
        </p>

        <button className="change-image-btn" onClick={handleChangeImage}>
          Change Image
        </button>

        <Suspense fallback={<p className="loading-text">Loading image...</p>}>
          <LazyImage
            imageSrc={imagePool[imageIndex]}
            imageAlt={`Scenic view ${imageIndex + 1}`}
          />
        </Suspense>
      </section>
    </main>
  );
}

export default App;