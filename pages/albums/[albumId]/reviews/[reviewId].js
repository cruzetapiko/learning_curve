import React from 'react';
import { useRouter } from 'next/router';

export default function Reviews() {
  const router = useRouter();
  const { albumId, reviewId } = router.query;

  return (
    <div>
      <h1>
        reviews pages {albumId} {reviewId}
      </h1>
    </div>
  );
}
