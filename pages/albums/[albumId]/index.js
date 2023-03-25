import React from 'react';
import { useRouter } from 'next/router';

export default function AlbumId() {
  const router = useRouter();
  const albumId = router.query.albumId;

  return <div>AlbumId {albumId} </div>;
}
