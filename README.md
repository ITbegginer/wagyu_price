# Git Lesson

## リモートリポジトリとローカルリポジトリとはそれぞれ何でしょうか？
リポジトリはファイル、ディレクトリ自身やその変更履歴等を保存する場所
リモートリポジトリとローカルリポジトリの差は場所の違いであり用途の違い
リモート：ネット上。共有や公開が出来るため、多人数での開発等に用いる。
ローカル：PC内。個人が開発を進めるためのもの。

## プッシュとマージの違いは何でしょうか？
プッシュ：ローカルリポジトリの内容をリモートリポジトリに反映させる。対象は同じブランチ。
マージ：同じリポジトリ内で、ブランチ内の変更を異なるブランチに反映させる。


## コミットとプッシュの違い
コミット：ローカルリポジトリの、同じブランチ内で変更履歴を保存する。
プッシュ：ローカルリポジトリからリモートリポジトリへ、対応するブランチに変更をアップロードし反映させる。
          結果、ローカルで作成された変更履歴も反映される。


## コミットのメッセージはどのように書いてあげるのが最適でしょうか？
基本的には変更内容を具体的かつ正確に書く。プロジェクト先のルールがあればそれに則る。


## ローカルでマージするフローと、プルリクエストでマージするフローの違いは何でしょうか？
マージ前にレビュー担当者のチェックが介在するかの違い。
ローカル：内容の変更→ステージング→コミット→マージ
プルリクエスト：内容の変更→ステージング→コミット→プッシュ→レビュー担当者へプルリクエスト→マージ


## コンフリクトを起こしてしまった場合、どう対処すべきですか？
ソースコード上で編集が衝突した箇所にメッセージが記されているので、それを確認し正しく修正したものを再度コミット、マージする。
修正が難しいようであれば、一旦マージを中断する。

