export type query = {
  where: {
    isDeleted: boolean;
  };
  limit?: number;
};

export type Permission = 'READ' | 'WRITE' | 'DELETE' | 'SHARE' | 'UPLOAD_FILES';

