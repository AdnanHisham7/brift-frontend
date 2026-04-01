import api from "./api";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface BootstrapSuperAdminPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface AuthUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    token: string;
    user: AuthUser;
  };
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
}

export const authService = {
  async login(payload: LoginPayload): Promise<LoginResponse> {
    const { data } = await api.post<LoginResponse>("/auth/login", payload);
    return data;
  },

  async bootstrapSuperAdmin(
    payload: BootstrapSuperAdminPayload,
  ): Promise<ApiResponse> {
    const { data } = await api.post<ApiResponse>(
      "/system/bootstrap-super-admin",
      payload,
    );
    return data;
  },

  async checkHealth(): Promise<ApiResponse> {
    const { data } = await api.get<ApiResponse>("/health");
    return data;
  },
};
