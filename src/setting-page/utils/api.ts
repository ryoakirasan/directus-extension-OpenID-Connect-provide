interface OIDCClient {
  id: string;
  client_name: string;
  client_site: string;
  client_id: string;
  client_secret: string;
  redirect_uri: string;
  date_created: string;
  status: boolean;
}
interface OIDCUserLog{
  id: string;
  user_id: string;
  username: string;
  client_id: string;
  client_uri: string;
  client_name: string;
  date_created: string;
}
interface OIDCProvideSetting {
  issuer: string;
  token_expires_in: number;
  refresh_token_expires_in: number;
  allow_refresh_tokens: boolean;
  require_client_secret: boolean;
  publicKeyPem: string;
  privateKeyPem: string;
}
const formatDateTime = (isoString) => {
  const date = new Date(isoString);
  const pad = (num) => num.toString().padStart(2, "0");

  return (
    [date.getFullYear(), pad(date.getMonth() + 1), pad(date.getDate())].join(
      "-"
    ) +
    " " +
    [pad(date.getHours()), pad(date.getMinutes()), pad(date.getSeconds())].join(
      ":"
    )
  );
};
export const getOIDCClients = async (
  api: any,
  search: string,
  offset: number = 1,
  limit: number = 20
) => {
  const fields = [
    "id",
    "date_created",
    "client_id",
    "client_name",
    "client_site",
    "status",
    "redirect_uri",
  ];
  const fieldsQuery = fields.map((field) => `fields[]=${field}`).join("&");
  const sortQuery = `sort[]=id`;
  const pageQuery = `page=${offset}`;
  const searchQuery = `search=${search}`;
  const limitQuery = `limit=${limit}`;
  let query = `?${fieldsQuery}&${sortQuery}&${pageQuery}&${limitQuery}`;
  if (search) {
    query += `&${searchQuery}`;
  }
  try {
    const url = "/items/ext_oidc_clients" + query;
    const response = (await api.get(url)).data;
    const count = Number(
      (await api.get("/items/ext_oidc_clients" + "?aggregate[count]=*")).data
        .data[0].count
    );
    const datas = response.data;
    const clients: OIDCClient[] = datas.map((data: any) => ({
      id: data.id,
      date_created: formatDateTime(data.date_created),
      client_name: data.client_name,
      client_site: data.client_site,
      client_id: data.client_id,
      redirect_uri: data.redirect_uri,
      status: data.status,
    }));
    return {
      clients,
      count,
    };
  } catch (error) {
    console.error("Error request:", error);
    return {};
  }
};
export const setOIDCClient = async (api: any, client: OIDCClient) => {
  try {
    const response = await api.post("/items/ext_oidc_clients", client);
    return response.data;
  } catch (error) {
    console.error("Error request:", error);
    throw error;
  }
};
export const getOIDCClient = async (api: any, id: string) => {
  try {
    const response = await api.get(`/items/ext_oidc_clients/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error request:", error);
    return {
      id: "",
      client_name: "",
      client_site: "",
      client_id: "",
      client_secret: "",
      redirect_uri: "",
      status: false,
    };
  }
};

export const updateOIDCClient = async (
  api: any,
  id: string,
  client: OIDCClient
) => {
  try {
    const response = await api.patch(`/items/ext_oidc_clients/${id}`, client);
    return response.data;
  } catch (error) {
    console.error("Error request:", error);
    return {
      id: "",
      client_name: "",
      client_site: "",
      client_id: "",
      client_secret: "",
      redirect_uri: "",
      status: false,
    };
  }
};

export const deleteOIDCClient = async (api: any, ids: string[]) => {
  try {
    await api.delete(`/items/ext_oidc_clients/`, {
      data: ids,
    });
    return "success";
  } catch (error) {
    console.error("Error request", error);
    return "error";
  }
};

export const getOIDCProviderConfig = async (
  api: any
): Promise<OIDCProvideSetting> => {
  const defaultConfig: OIDCProvideSetting = {
    issuer: document.location.origin,
    token_expires_in: 0,
    refresh_token_expires_in: 0,
    allow_refresh_tokens: true,
    require_client_secret: true,
    publicKeyPem: "",
    privateKeyPem: "",
  };

  try {
    const response = await api.get("/items/ext_oidc_settings");
    return {
      ...defaultConfig,
      ...(response?.data?.data || {}),
    };
  } catch (error) {
    console.error("Error request:", error);
    return defaultConfig;
  }
};
export const setOIDCProviderConfig = async (
  api: any,
  config: OIDCProvideSetting
): Promise<OIDCProvideSetting> => {
  try {
    const response = await api.patch("/items/ext_oidc_settings", config);
    return response?.data;
  } catch (error) {
    console.error("Error request:", error);
    throw error;
  }
};

export const getOIDCUserLogs = async (
  api: any,
  search: string,
  offset: number = 1,
  limit: number = 20
)=>{
  const fields = [
    "id",
    "date_created",
    "user_id",
    "client_id",
    "client_uri",
    "client_name",
    "username",
  ];
  const fieldsQuery = fields.map((field) => `fields[]=${field}`).join("&");
  const sortQuery = `sort[]=-date_created`;
  const pageQuery = `page=${offset}`;
  const searchQuery = `search=${search}`;
  const limitQuery = `limit=${limit}`;
  let query = `?${fieldsQuery}&${sortQuery}&${pageQuery}&${limitQuery}`;
  if (search) {
    query += `&${searchQuery}`;
  }
  try {
    const url = "/items/ext_oidc_user_logs" + query;
    const response = (await api.get(url)).data;
    const count = Number(
      (await api.get("/items/ext_oidc_user_logs" + "?aggregate[count]=*")).data
       .data[0].count
    );
    const datas = response.data;
    const userLogs: OIDCUserLog[] = datas.map((data: any) => ({
      id: data.id,
      date_created: formatDateTime(data.date_created),
      user_id: data.user_id,
      client_id: data.client_id,
      client_name: data.client_name,
      client_uri: data.client_uri,
      username: data.username,
    }));
    return {
      userLogs,
      count,
    };
  }
  catch (error) {
    console.error("Error request:", error);
    return {};
  }
}