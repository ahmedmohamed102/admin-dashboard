export const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // إعدادات الوضع الفاتح
            
          }
        : {
            // إعدادات الوضع المظلم
            
          }),
    },
  });
