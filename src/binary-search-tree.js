const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
	constructor() {
    this.rootNode = null;
  }
  root() {
    return this.rootNode;
  }
  add(data) {
    let newNode = new Node(data);
    if (this.rootNode === null) {
      this.rootNode = newNode;
    } else {
      this.addNode(this.rootNode, newNode);
    }
  }
  addNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.addNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.addNode(node.right, newNode);
      }
    }
  }
	has(data) {
    let foundNode = this.search(this.rootNode, data);
    if (foundNode) {
      return true;
    } else {
      return false;
    }
  }
  search(node = this.rootNode, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      return this.search(node.left, data);
    } else if (data > node.data) {
      return this.search(node.right, data);
    } else {
      return node;
    }
  }
	find(data) {
    let foundNode = this.search(this.rootNode, data);
    if (foundNode) {
      return foundNode.data;
    } else {
      return null;
    }
  }
  remove(data) {
    let nodeNeedRemove = this.search(this.rootNode, data);
    if (nodeNeedRemove) {

			// TODO: Remove nodeNeedRemove

      console.log(nodeNeedRemove);
    } else {
      console.log("Not search");
      return null;
    }
  }
  min(node = this.rootNode) {
    if (node === null) {
      return null;
    } else if (node.left === null) {
      return node.data;
    } else {
      return this.min(node.left);
    }
  }
  max(node = this.rootNode) {
    if (node === null) {
      return null;
    } else if (node.right === null) {
      return node.data;
    } else {
      return this.max(node.right);
    }
  }

	find(data) {
		if (data < this.root.data) {
			return this.find(data);
		} else if (data > node.data) {
			return this.search(node.right, data);
		} else {
			return node;
		}
	}
}

module.exports = {
	BinarySearchTree,
};
