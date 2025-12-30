import { Post } from "../../model/post.types";

export const MOCK_POSTS: Post[] = [
  {
    id: '1',
    name: 'Primer post',
    description: 'Este es un post de ejemplo para la aplicación.',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Segundo post',
    description: 'Otro post inicial cargado desde el servicio mock.',
    createdAt: new Date().toISOString(),
  },
];