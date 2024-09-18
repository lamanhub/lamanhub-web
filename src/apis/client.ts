const client = async (endpoints: string, options: RequestInit) => {
  const request = await fetch(`https://cms.lamanhub.site${endpoints}`, {
    ...options,
    headers: {
      Authorization:
        "Bearer 22f7ea7a5ce443b96d118e0170a4ec246e3a2a8608121d4bd46bbc12e30299898556a8eae1bcd557032e40158667fa1001f1bca2f226ac8e744ef517a9fe62569640ba42e0788a1a7bf995b5db2d26443e6eb892ba4b57670e908a525f89a8cbbeec64a77b43367a923f08a9e30e7ae9c72add5d4d0a6536536b206c50e68c62",
      ...options.headers,
    },
  }).then((res) => res.json());

  return await request;
};

export default client;
