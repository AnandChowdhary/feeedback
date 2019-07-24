interface FetchSettings {
  endpoint: string;
  method?: "GET" | "POST" | "PUT" | "OPTIONS" | "PATCH";
  fetchOptions?: {
    [index: string]: any;
  };
}

export interface Result {
  rating: number;
  message: string;
  screenshot?: Blob;
}

export interface Settings {
  appendTo?: Element;
  messageDelay?: number;
  onSubmit?(result: Result): Promise<any>;
  postResults?: FetchSettings;
  locale?: Locale;
}

export interface Locale {
  [index: string]: string;
}
