import React, { useState, useEffect } from 'react'
import { View, Text, FlatList } from 'react-native';
//import { Button, Divider, List } from 'react-native-paper'
import edlRoom from './EDL';
function findRoom() {



  return (
    <List.AccordionGroup>
      { rooms.rooms.map((room) => {
        return (
          <List.Accordion title={room.M_EstateValue} id="1">
            <EdlRoom />
          </List.Accordion>
        )
      }
      )
      }

    </List.AccordionGroup>
  )
}
export default findRoom 