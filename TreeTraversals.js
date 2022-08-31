class Tree {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

const preorder = (root) => {
    if(root === null) {
        return;
    }
    
    console.log(root.data);
    preorder(root.left);
    preorder(root.right);
}

const inorder = (root) => {
    if(root === null) {
        return;
    }
    
    inorder(root.left);
    console.log(root.data);
    inorder(root.right);
}

const postorder = (root) => {
    if(root === null) {
        return;
    }

    postorder(root.left);
    postorder(root.right);
    console.log(root.data);
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

postorder(a);

//         a
//        / \
//      b     c
//     / \     \
//    d   e     f