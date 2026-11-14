type InstagramReelsProps = {
  /** Instagram reel permalinks, e.g. "https://www.instagram.com/reel/ABC123/" */
  reelUrls: string[];
};

function getReelId(url: string): string | null {
  const match = url.match(/\/reel\/([^/?#]+)/);
  return match ? match[1] : null;
}

export function InstagramReels({ reelUrls }: InstagramReelsProps) {
  return (
    <div className="instagram-reels">
      {reelUrls.map((url) => {
        const id = getReelId(url);
        if (!id) {
          return null;
        }
        return (
          <div className="instagram-reel-frame" key={id}>
            <iframe
              src={`https://www.instagram.com/reel/${id}/embed/`}
              title="Chromas Ensemble on Instagram"
              loading="lazy"
              allowFullScreen
              scrolling="no"
            />
          </div>
        );
      })}
    </div>
  );
}
