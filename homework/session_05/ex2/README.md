\# Bài 2: Tái cấu trúc lịch sử commit bằng Interactive Rebase



\## 1. Mục tiêu



Sử dụng Interactive Rebase để chỉnh sửa lịch sử commit cục bộ:



\* Gộp 3 commit nhỏ thành 1 commit duy nhất.

\* Thay đổi thông điệp commit.

\* Xóa commit chứa file rác `temp.txt`.



\## 2. Lịch sử commit ban đầu



Nhánh làm việc ban đầu có 4 commit:



1\. `feat: khoi tao module auth`

2\. `fix typo`

3\. `adds utility functions`

4\. `add temp file for debug`



\## 3. Interactive Rebase



Thực hiện:



```bash

git rebase -i HEAD\~4

```



Cấu hình Interactive Rebase:



```text

pick f5de3c2 feat: khoi tao module auth

squash 6344a4e fix typo

squash 563c433 adds utility functions

drop 42191c0 add temp file for debug

```



!\[Interactive Rebase - pick squash drop](./01-rebase-pick-squash-drop.png)



\## 4. Squash và thay đổi commit message



Sau khi squash 3 commit, thông điệp commit được thay đổi thành:



```text

feat: hoan thien module authentication

```



!\[Squash commit message](./02-squash-commit-message.png)



\## 5. Reword



Thực hiện:



```bash

git rebase -i HEAD\~1

```



Sau đó thay `pick` bằng `reword`.



!\[Reword](./03-rebase-reword.png)



\## 6. Kết quả



Kiểm tra lịch sử:



```bash

git log --oneline

```



Commit sau khi hoàn tất tái cấu trúc:



```text

feat: hoan thien module authentication

```



File `temp.txt` đã được loại bỏ.



Kiểm tra:



```bash

Test-Path ".\\temp.txt"

```



Kết quả:



```text

False

```



!\[Final clean log](./04-final-log.png)



\## 7. Kết luận



Đã hoàn thành tái cấu trúc lịch sử commit bằng Interactive Rebase:



\* Squash 3 commit thành 1 commit.

\* Reword thông điệp commit.

\* Drop commit chứa `temp.txt`.

\* Thu được lịch sử commit sạch cho tính năng authentication.



