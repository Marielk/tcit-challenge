import { StyleSheet } from 'react-native';
import { tokens } from './tokens';

export const sharedStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    width: '100%'
  },
  panel: {
    borderWidth: tokens.border.width,
    borderColor: tokens.color.ink,
    backgroundColor: tokens.color.background,
    padding: tokens.spacing.sm,
  },

  tableRow: {
    flexDirection: 'row',
    minHeight: tokens.minHeight.row,
    backgroundColor: tokens.color.background,
    width: '100%',
    justifyContent: 'space-between'
  },

  tableCell: {
    paddingVertical: tokens.spacing.xs,
    paddingHorizontal: tokens.spacing.sm,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRightWidth: tokens.border.width,
    borderRightColor: tokens.color.ink,
  },

  tableHeaderText: {
    fontSize: tokens.fontSize.base,
    fontWeight: '700',
    color: tokens.color.ink,
    textAlign: 'center',
  },

  textBase: {
    fontSize: tokens.fontSize.base,
    color: tokens.color.ink,
  },

  textMuted: {
    fontSize: tokens.fontSize.small,
    color: tokens.color.muted,
  },

  outlinedButton: {
    borderWidth: tokens.border.width,
    borderColor: tokens.color.ink,
    backgroundColor: tokens.color.background,
    minHeight: tokens.minHeight.button,
    paddingHorizontal: tokens.spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '1px 3px 2px rgba(0,0,0,1)', 
  },

  outlinedButtonText: {
    fontSize: tokens.fontSize.base,
    fontWeight: '700',
    color: tokens.color.ink,
  },

  outlinedButtonPressed: {
    opacity: 0.7,
  },

  input: {
    width: '70%',
    borderWidth: tokens.border.width,
    borderColor: tokens.color.ink,
    paddingVertical: tokens.spacing.sm,
    paddingHorizontal: tokens.spacing.sm,
    fontSize: tokens.fontSize.base,
    color: tokens.color.ink,
    backgroundColor: tokens.color.background,
  },
});
