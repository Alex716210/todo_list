function getList(owner) {
    return tasks.filter(item => item.owner == owner)
}