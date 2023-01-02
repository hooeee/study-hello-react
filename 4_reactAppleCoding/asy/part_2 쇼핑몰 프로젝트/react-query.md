## react-query Setting

#### 설치

```cmd
npm install @tanstack/react-query
```

#### import

```js
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </QueryClientProvider>
  /* </React.StrictMode> */
);
```

## react-query 사용

```js
let result = useQuery("작명", () => {
  return axios.get("https://codingapple1.github.io/userdata.json").then((a) => {
    return a.data;
  });
});

result.data; // 성공 시 가져오는 데이터
result.isLoading; // ajax 요청 중 일때 true
result.error; // 요청 실패 시 True
```

- refetch 시간 설정

```js
let result = useQuery("작명", () => {
  return (
    axios.get("https://codingapple1.github.io/userdata.json").then((a) => {
      return a.data;
    }),
    {
      staleTime: 2000,
    }
  );
});
```
