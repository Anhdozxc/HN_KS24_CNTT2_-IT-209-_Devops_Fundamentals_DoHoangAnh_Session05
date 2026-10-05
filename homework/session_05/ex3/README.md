\# Bài 3: Xử lý xung đột phức tạp trong quá trình Rebase



\## 1. Mục tiêu



Thực hiện rebase nhánh `feature-api` lên `main`, giải quyết xung đột thủ công theo từng chặng và tạo lịch sử Git thẳng, không có merge commit.



\## 2. Các nhánh và commit



Nhánh `main`:



```text

init config

update port on main

add env config

```



Nhánh `feature-api`:



```text

feat: change port

feat: enable debug

```



\## 3. Rebase



Thực hiện:



```bash

git switch feature-api

git rebase main

```



\### Conflict lần 1



Conflict xảy ra khi áp dụng commit:



```text

feat: change port

```



`main` có:



```json

{

&#x20; "port": 8081,

&#x20; "debug": false,

&#x20; "env": "production"

}

```



Nhánh `feature-api` có thay đổi:



```json

{

&#x20; "port": 9000,

&#x20; "debug": false,

&#x20; "api": true

}

```



Giải quyết thủ công bằng cách giữ thay đổi của `main` đối với `port` và `env`, đồng thời giữ trường `api` của feature:



```json

{

&#x20; "port": 8081,

&#x20; "debug": false,

&#x20; "env": "production",

&#x20; "api": true

}

```



Sau đó:



```bash

git add homework/session\_05/ex3/config.json

git rebase --continue

```



!\[Conflict lần 1](./01-conflict-step1.png)



\### Conflict lần 2



Conflict xảy ra khi áp dụng commit:



```text

feat: enable debug

```



Nhánh `main` giữ:



```text

port: 8081

env: production

```



Nhánh `feature-api` thay đổi:



```text

debug: true

env: staging

```



Giải quyết thủ công bằng cách giữ thay đổi của `main` đối với `port` và `env`, đồng thời giữ `debug: true` của feature:



```json

{

&#x20; "port": 8081,

&#x20; "debug": true,

&#x20; "env": "production",

&#x20; "api": true

}

```



Sau đó:



```bash

git add homework/session\_05/ex3/config.json

git rebase --continue

```



!\[Conflict lần 2](./02-conflict-step2.png)



\## 4. Kết quả sau Rebase



Kiểm tra:



```bash

git status

```



Kết quả:



```text

nothing to commit, working tree clean

```



Kiểm tra lịch sử:



```bash

git log --graph --oneline --decorate --all

```



Lịch sử sau khi hoàn tất:



```text

\* feat: enable debug

\* feat: change port

\* add env config

\* update port on main

\* init config

```



Không có merge commit.



!\[Lịch sử Git sau Rebase](./03-final-log.png)



\## 5. Cấu hình cuối



```json

{

&#x20; "port": 8081,

&#x20; "debug": true,

&#x20; "env": "production",

&#x20; "api": true

}

```



\## 6. Kết luận



Đã hoàn thành xử lý xung đột từng chặng trong quá trình Interactive Rebase. Các commit của `feature-api` được đặt nối tiếp sau các commit mới nhất của `main`, lịch sử thẳng và không tạo merge commit.



