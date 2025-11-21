export interface NodeData {
  id: number;
  parentId: number | null;
  name: string;
  avatar: string;
  position: string;
}

export interface ExtendedNode {
  width: number;
  height: number;
  data: NodeData;
}

