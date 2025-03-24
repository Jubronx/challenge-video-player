export type Content = {
    __typename: "ProvisionDto";
    id: string;
    title: string;
    description: string;
    url: string;
    type: string;
    total_likes: number;
    cover: string;
    created_at: string;
    allow_download: boolean;
    is_embeddable: boolean;
    format: string;
    bytes: number;
    metadata: {
      resolution: string;
      aspect_ratio: string;
    };
  };