// function dragend_handler(ev) {
//     ev.target.textContent = "ドラッグ終了";
// }
//
//
// function dragstart_handler(ev) {
//     ev.target.textContent = "ドラッグ開始";
// }
//
// window.addEventListener("DOMContentLoaded", () => {
//     document.getElementById("p1").addEventListener("dragstart", dragstart_handler);
// });
//
// window.addEventListener("DOMContentLoaded", () => {
//     document.getElementById("p1").addEventListener("dragend", dragend_handler);
// });

window.addEventListener('load', () => {
    // ドラッグする全ての対象を取得
    const draggedItems = document.querySelectorAll('.dragged-item');

    // ドラッグするものの処理
    for (const item of draggedItems) {
        item.addEventListener('dragstart', (event) => {
            event.dataTransfer.setData('text/plain', event.target.id)
        })
    }

    // ドロップ先の処理
    const dropTarget =  document.getElementById("drop-target");

    //dragover イベントは、要素または選択されたテキストが、妥当なドロップターゲットの上にあるときに（数百ミリ秒間隔で）発生します。
    dropTarget.addEventListener('dragover', (event) => {
        event.preventDefault()
        event.dataTransfer.dropEffect = 'copy'
    })

    // 実際にdropされた時の処理
    dropTarget.addEventListener('drop', (event) => {
        event.preventDefault()

        let itemId = ''

        if (event.dataTransfer.items) {
            for (const item of event.dataTransfer.items) {
                const { kind, type } = item
                if (kind === 'file') {
                } else if (kind === 'string') {
                    if (type === 'text/plain') {
                        itemId = event.dataTransfer.getData(type)
                    }
                }
            }
        }

        if (itemId !== '') {
            dropTarget.innerHTML = document.getElementById(itemId).innerHTML;
            alert(document.getElementById(itemId).textContent);
            document.getElementById(itemId).parentNode.removeChild( document.getElementById(itemId));
        }
    })
})