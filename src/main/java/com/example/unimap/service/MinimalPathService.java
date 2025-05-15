package com.example.unimap.service;

import com.example.unimap.algorithm.Graph;
import com.example.unimap.dto.PathResult;
import com.example.unimap.entity.MinimalPath;
import com.example.unimap.exception.InvalidInputException;
import com.example.unimap.exception.ResourceNotFoundException;
import com.example.unimap.repository.MinimalPathRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Optional;

@Service
public class MinimalPathService {
    private MinimalPathRepo pathRepo;

    @Autowired
    private MinimalPathService(MinimalPathRepo pathRepo) {
        this.pathRepo = pathRepo;
    }

    private String getMinimalPath(String points) {          // from Optional to String
        Optional<MinimalPath> minPath = pathRepo.findById(points);
        return minPath.isPresent() ? minPath.get().getPathBetween() : null;
    }


    public PathResult findShortestPath(String start, String end) {
        if (start == null || end == null || start.trim().isEmpty() || end.trim().isEmpty())
            throw new InvalidInputException("Start or end room cannot be empty.");

        String minimalPath;
        minimalPath = getMinimalPath(start + "-" + end);

        minimalPath = getMinimalPath(start + "-" + end);
        if (minimalPath != null) {
            return new PathResult(minimalPath, true);
        }

        minimalPath = getMinimalPath(end + "-" + start);
        if (minimalPath != null) {
            return new PathResult(pathReverser(minimalPath), true);
        }

        minimalPath = Graph.minPathBetweenPoints(start, end);
        if (minimalPath != null) {                              // if rooms were valid
            pathRepo.save(new MinimalPath(start + "-" + end, minimalPath));
        } else {
            throw new ResourceNotFoundException("One of the rooms doesn't exist.");
        }

        return new PathResult(minimalPath, false);
    }

    private String pathReverser(String path) {
        String[] points = path.split("-");
        ArrayList<String> listPoints = new ArrayList<>(Arrays.asList(points));
        String lastElement = listPoints.remove(listPoints.size() - 1);
        Collections.reverse(listPoints);
        listPoints.add(lastElement);
        return String.join("-", listPoints);
    }
}
