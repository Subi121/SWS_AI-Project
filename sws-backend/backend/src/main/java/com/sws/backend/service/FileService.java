
package com.sws.backend.service;

import com.sws.backend.entity.FileEntity;
import com.sws.backend.repository.FileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class FileService {

    @Autowired
    private FileRepository fileRepository;

    public FileEntity uploadFile(MultipartFile file) throws IOException {

        FileEntity fileEntity = new FileEntity();

        fileEntity.setFileName(file.getOriginalFilename());
        fileEntity.setStatus("UPLOADED");
        fileEntity.setData(file.getBytes());

        return fileRepository.save(fileEntity);
    }

    public List<FileEntity> getAllFiles() {

        return fileRepository.findAll();
    }
}