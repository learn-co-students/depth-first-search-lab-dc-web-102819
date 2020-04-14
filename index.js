function depthFirstSearch(rootNode, vertices, edges) {
    const activeStack = []
    const fullStack = []
    
    const getNewAdjacent = (node) => {
        let relEdges = edges.filter(edge => edge[0] === node.name || edge[1] === node.name)
        relEdges = relEdges.map(edge => edge[0] === node.name ? edge[1] : edge[0])
        const newAdjacent = vertices.filter(vertex => relEdges.includes(vertex.name) && !vertex.discovered)
        markVisited(...newAdjacent)
    }

    const markVisited = (...nodes) => { 
        nodes.forEach(node => {
            const idx = vertices.findIndex(vertex => vertex.name === node.name)
            vertices[idx].discovered = true
            activeStack.push(node)
            fullStack.push(node)
        })
    }
    
    markVisited(rootNode)

    while (activeStack.length > 0) {
        getNewAdjacent(activeStack.pop())
    }

    return fullStack
}