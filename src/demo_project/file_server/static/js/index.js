$(document).ready(
    () => {
        console.log('ready');
    }
)


$.ajax({
    url: '/api',
    method: 'POST',
    dataType: 'json',
    json: JSON.stringify({ path: '/' }),
    success: function (resp) {
        // 成功接收到数据后的回调函数
        // data 参数就是解析后的 JSON 数据
        // console.log(JSON.parse(data));

        layui.use('table', function () {
            var table = layui.table;

            // 已知数据渲染
            var inst = table.render({
                elem: '#filetable',
                cols: [[ //标题栏
                    { field: 'filename', title: 'Filename', minWidth: 160, sort: true },
                    { field: 'modify', title: 'Modify', minWidth: 120, sort: true },
                    { field: 'isdir', title: 'isDir', minWidth: 40, sort: true }
                ]],
                data: resp.data,
                page: true, // 是否显示分页
                limits: [5, 10, 15],
                limit: 5 // 每页默认显示的数量
            });
        });
    },
    error: function (xhr, status, error) {
        // 处理请求错误的回调函数
        console.log(error);
    }
});



// $.ajax(
//     {
//         url: '/test',
//         method: 'Post',
//         type: 'json',
//         data: JSON.stringify({ 'path': '/' }),
//         success: (resp) => {
//             console.log(resp);
//         }
//     }
// )