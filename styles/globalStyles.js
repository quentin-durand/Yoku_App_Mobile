const { BorderClear, BorderColor, FormatBold } = require("@material-ui/icons");

import React from 'react'


const styles ={
    container:{
        flex:1,
        padding:10,
    },
    input:{
    borderColor:'#ddd',
    borderWidth:1,
    padding:10,
    margin:10,
    fontSize:18,
    borderRadius:6,

},
title:{
color:'#364156',
fontWeight:'bold',
},
button:{
    backgroundColor:'#364156',
    color:'#dff8eb',
},
container: {
    flex: 1,
    justifyContent: 'space-between',
    
  },
  snackbarSuccess:{
    backgroundColor:'green',
  }
}
export default styles