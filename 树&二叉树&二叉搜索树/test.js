const isValidBST = (root) => {
    let prev = null;

    const helper = (root) => {
        if (!root) {
            return true;
        }

        if (!helper(root.left)) {
            return false;
        }

        if (prev && prev.val >= root.val) {
            return false;
        }
        prev = root;

        return helper(root.right);
    };
    return helper(root);
};

const root = {
    left: {
        left: null,
        val: 2,
        right: null
    },
    val: 1,
    right: {
        left: null,
        val: 3,
        right: null
    }
};

const end = isValidBST(root);

console.log('结果是', end);