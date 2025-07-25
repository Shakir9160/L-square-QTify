import React from "react";
import { useParams } from "react-router-dom";

export default function Album() {
  const { albumId } = useParams();

  return <>{albumId}</>;
}
