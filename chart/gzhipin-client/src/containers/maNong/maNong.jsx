/*
* 老板主界面路由组件
* */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getUserList} from '../../redux/actions'

import UserList from '../../components/user-list/user-list'

class MaNong extends Component {
  componentDidMount () {
    //获取userList
    this.props.getUserList('laoBan')
  }

  render () {
    return (
      <UserList userList={this.props.userList}/>
    )
  }
}

export default connect(
  state => ({userList:state.userList}),
  {getUserList},
)(MaNong)
