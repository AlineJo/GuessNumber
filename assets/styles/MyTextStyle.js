import React from 'react';
import { StyleSheet } from 'react-native'
import Spacing from '../../Constants/Spacing';
import Tags from '../../Constants/Tags';

const MyTextStyle = (color) => StyleSheet.create({
    
    // roboto thin styles
    thin_12: {
        color: color,
        fontFamily: Tags.font_RobotoThin,
        fontSize: Spacing.fontSize_Small_12,
    },
    thin_14: {
        color: color,
        fontFamily: Tags.font_RobotoThin,
        fontSize: Spacing.fontSize_Small_14,
    },
    thin_16: {
        color: color,
        fontFamily: Tags.font_RobotoThin,
        fontSize: Spacing.fontSize_Normal_16,
    },
    thin_18: {
        color: color,
        fontFamily: Tags.font_RobotoThin,
        fontSize: Spacing.fontSize_Normal_16,
    },

    thin_22: {
        color: color,
        fontFamily: Tags.font_RobotoThin,
        fontSize: Spacing.fontSize_Big_22,
    },
    thin_24: {
        color: color,
        fontFamily: Tags.font_RobotoThin,
        fontSize: Spacing.fontSize_Big_24,
    },

    // roboto light styles
    light_12: {
        color: color,
        fontFamily: Tags.font_RobotoLight,
        fontSize: Spacing.fontSize_Small_12,
    },
    light_14: {
        color: color,
        fontFamily: Tags.font_RobotoLight,
        fontSize: Spacing.fontSize_Small_14,
    },
    light_16: {
        color: color,
        fontFamily: Tags.font_RobotoLight,
        fontSize: Spacing.fontSize_Normal_16,
    },
    light_18: {
        color: color,
        fontFamily: Tags.font_RobotoLight,
        fontSize: Spacing.fontSize_Normal_16,
    },

    light_22: {
        color: color,
        fontFamily: Tags.font_RobotoLight,
        fontSize: Spacing.fontSize_Big_22,
    },
    light_24: {
        color: color,
        fontFamily: Tags.font_RobotoLight,
        fontSize: Spacing.fontSize_Big_24,
    },


    // roboto big styles
    big_12: {
        color: color,
        fontFamily: Tags.font_RobotoBig,
        fontSize: Spacing.fontSize_Small_12,
    },
    big_14: {
        color: color,
        fontFamily: Tags.font_RobotoBig,
        fontSize: Spacing.fontSize_Small_14,
    },
    big_16: {
        color: color,
        fontFamily: Tags.font_RobotoBig,
        fontSize: Spacing.fontSize_Normal_16,
    },
    big_18: {
        color: color,
        fontFamily: Tags.font_RobotoBig,
        fontSize: Spacing.fontSize_Normal_16,
    },

    big_22: {
        color: color,
        fontFamily: Tags.font_RobotoBig,
        fontSize: Spacing.fontSize_Big_22,
    },
    big_24: {
        color: color,
        fontFamily: Tags.font_RobotoBig,
        fontSize: Spacing.fontSize_Big_24,
    },

});


export default MyTextStyle