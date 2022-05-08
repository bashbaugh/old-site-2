/** Returns vertices and indices from Three mesh */
export const trimeshFromMesh = (
  m: THREE.Mesh
): [vertices: ArrayLike<number>, indices: ArrayLike<number>] => [
  m.geometry.attributes.position.array,
  m.geometry.index.array,
]
