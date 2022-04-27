function func(item) {
    return (item.result === 'W');
    }

function superbowlWin(record){
    const element = record.find(func);
    if (element) {return element.year}
}