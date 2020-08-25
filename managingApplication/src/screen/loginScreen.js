import React, { useState } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    View,
    TouchableOpacity,
    TextInput,
    Alert
} from 'react-native'
import HeaderText from '../component/HeaderText'
import AppText from '../component/AppText'
import DescriptionModal from '../component/DescriptionModal'

import * as globalStyles from '../global/styles'
import connectFromServer from '../server/connectFromServer'

const LogInScreen = ({navigation}) => {
    const [token, setToken] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [modalVisible, setModalVisible] = useState(false)

    const pressLoginButton = () => {
        const info = {
            user_token: token,
            password: password
        }
        connectFromServer('login', info)
        .then(value => {
            if('error' in value){
                Alert.alert(value.error)
            }
            else {
                const user_info = {
                    user_id: value.id,
                    user_name: value.name
                }
                navigation.navigate('ScheduleList', user_info)
            }
        })
        .finally(() => {
            setToken("")
            setPassword("")
        })
    }

    const tryRegister = () => {
        const info = {
            user_token: token,
            user_name: username,
            password: password
        }
        connectFromServer('registerIn', info)
        .then(value => {
            if('error' in value){
                Alert.alert(value.error)
            }
            else {
                const user_info = {
                    user_id: value.id,
                    user_name: value.name
                }
                navigation.navigate('ScheduleList', user_info)
            }
        })
        .finally(() => {
            setToken("")
            setPassword("")
            setUsername("")
            setModalVisible(!modalVisible)
        })
    }

    const RegisterButton = () => {
        return (
            <View style={styles.buttonLayStyle}>
            <TouchableOpacity style={[styles.ModalCloseButtonStyle, {borderBottomLeftRadius: 10}]} 
                                onPress={() => tryRegister()}>
                <HeaderText theme="dark">가입하기</HeaderText>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.ModalCloseButtonStyle, {borderBottomRightRadius: 10}]} 
                                onPress={() => setModalVisible(!modalVisible)}>
                <HeaderText theme="dark">취소</HeaderText>
            </TouchableOpacity>
            </View>
        )
    }

    return (
      <SafeAreaView style={styles.loginView}>
        <HeaderText theme='dark'
                      style={styles.headerStyle}>
                          {"Find\nYour Way"}
        </HeaderText>    
        <View style={styles.loginInputView}>
        <DescriptionModal modalVisible={modalVisible}
                          type={'계정'}
                          descriptionStyle={{height: 300}}
                          button={RegisterButton()}>
            <AppText theme='light'>{`계정 아이디 작성하기`}</AppText>
            <TextInput style={[styles.ModalDescriptionTextStyle, styles.inputTextStyle]}
                        placeholder={`새로 만들 아이디를 적으세요`}
                        placeholderTextColor={globalStyles.PLACEHOLDER_TEXT_COLOR}
                        onSubmitEditing={() => onPressModalButton()}
                        onChangeText={(text) => setToken(text)}
                        value={token}
                        />
            <AppText theme='light'>{`계정 이름 작성하기`}</AppText>
            <TextInput style={[styles.ModalDescriptionTextStyle, styles.inputTextStyle]}
                        placeholder={`계정 이름을 적으세요`}
                        placeholderTextColor={globalStyles.PLACEHOLDER_TEXT_COLOR}
                        onSubmitEditing={() => onPressModalButton()}
                        onChangeText={(text) => setUsername(text)}
                        value={username}
                        />
            <AppText theme='light'>{`비밀번호 작성하기`}</AppText>
            <TextInput style={[styles.ModalDescriptionTextStyle, styles.inputTextStyle, styles.inputLongTextStyle]}
                        placeholder={`비밀번호를 적으세요`}
                        placeholderTextColor={globalStyles.PLACEHOLDER_TEXT_COLOR}
                        secureTextEntry={true}
                        onSubmitEditing={() => onPressModalButton()}
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        />
        </DescriptionModal>
        <HeaderText>아이디를 넣어주세요</HeaderText>
        <TextInput style={styles.textInputStyle}
                   placeholder={'아이디'}
                   placeholderTextColor={globalStyles.PLACEHOLDER_TEXT_COLOR}
                   textContentType='username'
                   onSubmitEditing={() => pressLoginButton()}
                   onChangeText={(text) => setToken(text)}
                   value={token}/>
        <HeaderText>비밀번호를 넣어주세요</HeaderText>
        <TextInput style={styles.textInputStyle}
                   placeholder={"비밀번호"}
                   placeholderTextColor={globalStyles.PLACEHOLDER_TEXT_COLOR}
                   textContentType='newPassword'
                   secureTextEntry={true}
                   onSubmitEditing={() => pressLoginButton()}
                   onChangeText={(text) => setPassword(text)}
                   value={password}/>
        </View>
        <View style={styles.loginButtonView}>
            <TouchableOpacity style={[styles.touchButtonStyle, {borderBottomLeftRadius: 40}]}
                              onPress={() => pressLoginButton()}>
                <HeaderText theme='light'>로그인 하기</HeaderText>    
            </TouchableOpacity>
            <TouchableOpacity style={[styles.touchButtonStyle]}
                              onPress={() => setModalVisible(!modalVisible)}>
                <HeaderText theme='light'>회원가입 하기</HeaderText>    
            </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    loginView: {
        backgroundColor: globalStyles.LIGHT_BG_COLOR,
        height: '100%',
        justifyContent: "center",
        alignItems: 'center',
    },
    headerStyle: {
        fontSize: 40,
        marginTop: -160,
        marginBottom: 50,
        textAlign: 'center'
    },
    loginInputView: {
        width: '80%',
        height: '30%',
        borderColor: globalStyles.DARK_COLOR,
        borderWidth: 5,
        borderBottomWidth: 0,
        justifyContent: 'center',
        alignItems:'center',
    },
    loginButtonView: {
        width: '80%',
        height: '10%',
        flexDirection: 'row',
        alignItems:'center',
    },
    textInputStyle: {
        height: 30,
        width: '60%',
        textAlign: 'center',
        margin: 10,
        borderWidth: 3,
        backgroundColor: globalStyles.LIGHT_BG_COLOR,
        borderColor: globalStyles.LIGHT_COLOR
    },
    touchButtonStyle: {
        width: '50%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: globalStyles.DARK_COLOR,
    },
    inputTextStyle: {
        height: '10%',
        width: '80%',
        marginTop: 10,
        marginBottom: 10,
        borderColor: '#F8F9F9',
        borderWidth: 1
    },
    ModalDescriptionTextStyle: {
        color: globalStyles.LIGHT_TEXT_COLOR,
        textAlign: 'center',

    },
    buttonLayStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    ModalCloseButtonStyle: {
        backgroundColor: '#E7BDB3',
        height: 50,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },
})

export default LogInScreen