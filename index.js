function depthFirstSearch(rootNode, vertices, edges) {
    let stack = []
    stack.push(rootNode)
    let visited = [rootNode]
    while(stack.length != 0){
        let v = stack.pop()
        if(!v.discovered){
            v.discovered = true

            findAdjacent(v.name, vertices, edges).forEach(node => {
                visited.push(node)
                stack.push(node)

            })
        }
    }
    return visited
}

function findNode(nodeName, vertices) {
    return vertices.find(vertix => vertix.name == nodeName)
}

function findAdjacent(node, vertices, edges) {
    let adjacentNodes = edges.filter(edge => edge.includes(node))
    let names = []
    adjacentNodes.map(node => names.push(node[0]) && names.push(node[1]) )
    let verticesIncludingNode = vertices.filter(vertix => names.includes(vertix.name))
    let verticesWithoutNode = verticesIncludingNode.filter(vertix => vertix.name != node)
    let answer = verticesWithoutNode.filter(vertix => !vertix.discovered)
    return answer
}