
package com.sws.backend.controller;

import com.sws.backend.entity.FileEntity;
import com.sws.backend.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/files")
@CrossOrigin(origins = "*")
public class FileController {

    @Autowired
    private FileService fileService;

    @PostMapping("/upload")
    public FileEntity uploadFile(
            @RequestParam("file")
            MultipartFile file
    ) throws IOException {

        return fileService.uploadFile(file);
    }

    @GetMapping
    public List<FileEntity> getFiles() {

        return fileService.getAllFiles();
    }
}