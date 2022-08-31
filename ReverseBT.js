class Tree{
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

const reverseBinaryTree = (root) => {
    if(root === null) {
        return;
    }
    
    [root.left, root.right] = [root.right, root.left];
    reverseBinaryTree(root.left);
    reverseBinaryTree(root.right);
}

const a = new Tree('a');
const b = new Tree('b');
const c = new Tree('c');
const d = new Tree('d');
const e = new Tree('e');
const f = new Tree('f')

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const preorder = (root) => {
    if(root === null) {
        return;
    }
    
    console.log(root.data);
    preorder(root.left);
    preorder(root.right);
}

reverseBinaryTree(a);
preorder(a);


//         a
//        / \
//      b     c
//     / \     \
//    d   e     f

//         a
//        / \
//      c     b
//       \   / \
//       f  e   d