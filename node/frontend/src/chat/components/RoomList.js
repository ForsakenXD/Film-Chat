import React, { Component } from 'react'

class RoomList extends Component {

    onClick = room => {
        this.props.subscribeToRoom(room.id)
        this.props.roomSet(room.name)
    }

    render () {
        const orderedRooms = [...this.props.rooms].sort((a,b) => a.id - b.id)
        return (
            <div className="rooms-list">
                <ul>
                <h3>Popular Rooms</h3>
                    <div>
                        {orderedRooms.map(room => {
                            const active = this.props.roomId === room.id ? "active" : "";
                            return (
                                <li key={room.id} className={"room" + active}>
                                    <a onClick={() => this.onClick(room)} href={`#${room.id}`} >#{room.name}</a>
                                </li>
                            )
                        })}
                    </div>
                </ul>
            </div>
        )
    }
}

export default RoomList
