## sql 注入

用户可以在发送的数据里面伪造 sql 拼接字符串注入到代码里面, 典型的比如不使用`?`作为占位符, 比如:

登录需要输入账号和密码, 输入以后表单提交到服务器, 用 select 语句查询数据库里面是否存在这样的用户, 如果 select 语句如下

```python
def select(conn, form):
    cursor = conn.cursor()
    uname = form.get('username', '')
    pwd = form.get('password', '')
    sql = """
    SELECT 
        *
    FROM
        User
    WHERE
        username="{}" and password="{}"
    """.format(uname, pwd)

    cursor.execuate(sql)
    return cursor.fetchall()
```

假设以上代码, 用户提交的数据为:

```python
form = {
    'username': 'bobo" or "1"="1'
    'password' = ''
}
```
那么 sql 语句就变成了`Where username="bobo" or "1"="1" and password=""`, 这里 username 是正确的情况下该语句恒成立(先执行 and 再执行 or), 所以可以不用输入密码就登录.