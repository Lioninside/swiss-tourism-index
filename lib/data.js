import places from '@/data/processed/places.json';
import weights from '@/config/weights.json';
import sources from '@/config/sources.json';

export function getPlaces() {
  return [...places].sort((a, b) => b.score.total - a.score.total);
}

export function getPlace(slug) {
  return places.find((place) => place.slug === slug);
}

export function getTopPlaces(limit = 6) {
  return getPlaces().slice(0, limit);
}

export function getRegions() {
  return Array.from(new Set(places.map((place) => place.region)));
}

export function getWeights() {
  return weights;
}

export function getSources() {
  return sources;
}

export function getStats() {
  const all = getPlaces();
  return {
    count: all.length,
    regions: getRegions().length,
    topScore: all[0]?.score.total ?? 0,
  };
}
